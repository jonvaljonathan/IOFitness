import connectToDb from '../../server/middleware/database';
import TrainingSession from '../../server/models/TrainingSession';
import LocalUser from '../../server/models/LocalUser';
/*
1. creates the sessionOrder array and nextSession and saves it to the localUser document 
2. takes the trainingSessionsArray and transforms it into the correct shape
3. saves multiple training sessions to the trainingSessions collection
*/

const createMultipleTrainingSessions = async (req, res) => {
  await connectToDb();
  const { localUser } = req.body;
  const { newTrainingSessions } = req.body;
  const trainingSessionsArray = newTrainingSessions;

  // takes the trainingSessionName from each object and creates an array
  // saved as the localUser.trainingSessionOrder
  const trainingSessionNameArray = trainingSessionsArray.map(
    ({ trainingSessionName }) => trainingSessionName,
  );

  const newTrainingSessionsToSave = trainingSessionsArray.map((trainingSession) => {
    const exercisesArray = [];

    Object.keys(trainingSession).forEach((key) => {
      if (key !== 'trainingSessionName') {
        exercisesArray.push(trainingSession[key]);
      }
    });
    const addExerciseNumber = (array) => {
      const newArray = array.map((exerciseObject, index) => ({
        ...exerciseObject,
        exerciseNumber: index + 1,
      }));
      return newArray;
    };

    const trainingSessionObject = {
      uid: localUser._id,
      date: '',
      complete: false,
      trainingSessionName: trainingSession.trainingSessionName,
      exercises: addExerciseNumber(exercisesArray),
    };
    return trainingSessionObject;
  });
  try {
    const response = await TrainingSession.createMultipleTrainingSessions(
      newTrainingSessionsToSave,
    );
    const updateUserSessionOrder = await LocalUser.updateTrainingSessionOrder(
      localUser._id,
      trainingSessionNameArray,
    );
    res.json({ response, updateUserSessionOrder });
  } catch (e) {
    res.json(e);
  }
};

export default createMultipleTrainingSessions;

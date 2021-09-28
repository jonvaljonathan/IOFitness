const mongoose = require('mongoose');

const { Schema } = mongoose;

// group: what other exercises are you grouped with
// totalSets: total sets to complete
// setsCompleted

const mongoSchema = new Schema({
  uid: { type: String, required: true },
  trainingSessionName: { type: String, required: true },
  date: Date,
  complete: Boolean,
  exercises: [
    {
      _id: false,
      exerciseName: String,
      exerciseNumber: Number,
      groupNumber: Number,
      totalSets: Number,
      numReps: Number,
      resistance: Schema.Types.Mixed,
      resistanceType: String,
      exerciseIntensity: String,
      workTime: Number,
      restTime: Number,
      complete: { type: Boolean, default: false },
    },
  ],
});

class TrainingSessionClass {
  static publicFields() {
    return ['uid'];
  }

  static async createTrainingSession(trainingSession) {
    try {
      const newTrainingSession = await this.create(trainingSession);
      return newTrainingSession;
    } catch (e) {
      return e;
    }
  }

  static async getCompletedSessionsByName(uid, trainingSessionName) {
    try {
      const completedSessions = await this.find({ uid, trainingSessionName, complete: true });
      return completedSessions;
    } catch (e) {
      return e;
    }
  }

  static async createMultipleTrainingSessions(trainingSessions) {
    try {
      const result = await this.insertMany(trainingSessions, { ordered: true });
      return result;
    } catch (e) {
      return e;
    }
  }

  static async getTrainingSession(uid, trainingSessionName) {
    try {
      const trainingSession = await this.findOne({
        uid,
        trainingSessionName,
        complete: false,
      })
        .sort({ date: -1 })
        .lean();
      return trainingSession;
    } catch (e) {
      return e;
    }
  }

  static async getAllCompletedSessions(uid) {
    try {
      const allCompletedSessions = await this.find({ uid, complete: true });
      return allCompletedSessions;
    } catch (e) {
      return e;
    }
  }

  static async deleteUserSessions(uid) {
    try {
      const deletedSessions = await this.deleteMany(uid);
      return deletedSessions;
    } catch (e) {
      return e;
    }
  }

  static async getLastCompletedTrainingSessionByName(uid, trainingSessionName) {
    try {
      const lastTrainingSession = await this.findOne({
        uid,
        trainingSessionName,
        complete: true,
      })
        .sort({ date: -1 })
        .lean();
      return lastTrainingSession;
    } catch (e) {
      return e;
    }
  }

  static async completeTrainingSession(completedSessionId, completedSession, nextSession) {
    // find and update the previous session

    try {
      const trainingSession = await this.findOne({ _id: completedSessionId });
      trainingSession.exercises = completedSession.exercises;
      trainingSession.complete = completedSession.complete;
      trainingSession.date = Date.now();

      await trainingSession.save();
      nextSession.complete = false;
      const createNextSession = await this.create(nextSession);

      return createNextSession;
    } catch (e) {
      return e;
    }
  }

  // search for a program with a users uid
  // find the next trainingSession in the workouts Array where complete = false
  // return just that trainingSession and the program _id
}

mongoSchema.loadClass(TrainingSessionClass);

module.exports = mongoose.models.TrainingSession || mongoose.model('TrainingSession', mongoSchema);

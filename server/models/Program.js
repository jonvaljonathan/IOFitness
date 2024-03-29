const mongoose = require('mongoose');

const { Schema } = mongoose;

// group: what other exercises are you grouped with
// totalSets: total sets to complete
// setsCompleted
const workoutSchema = new Schema({
  uid: String,
  date: Date,
  complete: Boolean,
  exercises: [
    {
      exerciseName: String,
      numReps: Number,
      resistance: Schema.Types.Mixed,
      resistanceType: String,
      exerciseType: String,
      exerciseIntensity: String,
      group: Number,
      toalSets: Number,
      setsCompleted: Number,
      complete: false,
      workTime: Number,
      restTime: Number,
    },
  ],
});

const mongoSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  cycles: {
    type: Number,
    required: true,
    unique: false,
    default: 8,
  },
  currentCycle: {
    type: Number,
    required: true,
    unique: false,
    default: 1,
  },
  programName: {
    type: String,
    required: true,
    unique: false,
  },
  workouts: [workoutSchema],
  workoutsCompleted: Number,
});

class ProgramClass {
  static publicFields() {
    return ['id', 'displayName', 'email', 'isAdmin'];
  }

  static async createProgram(program) {
    try {
      const newProgram = await this.create(program);

      return newProgram;
    } catch (e) {
      return e;
    }
  }

  static async getProgram(uid) {
    try {
      const program = await this.findOne({ uid });
      return program;
    } catch (e) {
      return e;
    }
  }

  // search for a program with a users uid
  // find the next workout in the workouts Array where complete = false
  // return just that workout and the program _id
}

mongoSchema.loadClass(ProgramClass);

module.exports = mongoose.models.Program || mongoose.model('Program', mongoSchema);

const mongoose = require('mongoose');

const { Schema } = mongoose;

// define user Schema
const mongoSchema = new Schema({
  name: String,
  progression: Array,
  eccentricMovement: Array,
  concentricMovement: Array,
  faultList: Array,
  type: String,
});

class ProgressionClass {
  static async findProgression({ name }) {
    try {
      const Progression = await this.findOne({ name });
      return Progression;
    } catch (e) {
      return e;
    }
  }

  static async getAll() {
    try {
      const progressions = await this.find({}, 'name progression type');

      return progressions;
    } catch (e) {
      return e;
    }
  }

  static async deleteExercise(name) {
    let response;
    try {
      await this.deleteOne({ name });
      response = 'deleted exrecise';
      return response;
    } catch (e) {
      return e;
    }
  }
}

mongoSchema.loadClass(ProgressionClass);

module.exports = mongoose.models.Progression || mongoose.model('Progression', mongoSchema);

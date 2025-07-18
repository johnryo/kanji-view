import { Schema, model, models } from 'mongoose';

const kanjiSchema = new Schema({
  id: {
    type: Number,
  },
  character: {
    type: String,
    required: [true, 'One character is required'],
  },
  reading: {
    type: String,
    required: [true, 'At least one reading is required'],
  },
  meaning: {
    type: String,
    required: [true, 'At least one meaning is required'],
  },
  stroke: {
    type: Number,
    required: [true, 'The stroke count is required'],
  },
});

const Kanji = models.Kanji || model('Kanji', kanjiSchema);

export default Kanji;

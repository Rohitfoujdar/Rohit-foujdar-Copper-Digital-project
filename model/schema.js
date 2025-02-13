import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  });


  const Todo = mongoose.model("todo", todoSchema);
export default Todo;
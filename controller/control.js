export const welcome = (req, res) => {
    res.json({
      data: "Hii this is Node js api key.....",
    });
  };

  export const Total=('/api/todos', async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching todos', error });
    }
  });
  
  export const create=('/api/todos', async (req, res) => {
    try {
      const { task } = req.body;
      const newTodo = new Todo({ task });
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: 'Error creating todo', error });
    }
  });
  
  // Update a todo
  export const update= ('/api/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { task, isCompleted } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { task, isCompleted },
        { new: true }
      );
      if (!updatedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ message: 'Error updating todo', error });
    }
  });
  
  // Delete a todo
  export const Delete=('/api/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTodo = await Todo.findByIdAndDelete(id);
      if (!deletedTodo) {
        return res.status(404).json({ message: 'Todo not found' });
      }
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting todo', error });
    }
  });
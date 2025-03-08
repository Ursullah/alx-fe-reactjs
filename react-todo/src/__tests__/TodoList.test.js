import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // Check if TodoList renders correctly
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);
    
    // Verify initial todos are in the document
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Master JavaScript")).toBeInTheDocument();
  });

  // Add a new todo
  test("adds a new todo item", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    // Simulate typing a new todo and clicking "Add"
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    // Verify the new todo is added
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  // Toggle a todo item (complete/incomplete)
  test("toggles todo completion status", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    // Initially, it should NOT have the "completed" class
    expect(todoItem).not.toHaveClass("completed");

    // Click to toggle completion
    fireEvent.click(todoItem);

    // Now, it should have the "completed" class
    expect(todoItem).toHaveClass("completed");

    // Click again to toggle back
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("completed");
  });

  // Delete a todo item
  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling; // The delete button is the next sibling

    // Click delete
    fireEvent.click(deleteButton);

    // Verify it is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});

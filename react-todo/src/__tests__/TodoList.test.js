import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
import { within } from "@testing-library/react";

describe("TodoList Component", () => {

//ensure the component renders correctly with initial todos
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Master JavaScript")).toBeInTheDocument();
  });
//    check if a new todo is added successfully 
  test("adds a new todo item", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("prevents adding an empty todo", () => {
    render(<TodoList />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(screen.getAllByRole("listitem").length).toBe(3);
  });

//   checks if a todo item can be marked as completed and toggled back
  test("toggles todo completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem.closest("li"));
    expect(todoItem.closest("li")).toHaveClass("completed");

    fireEvent.click(todoItem.closest("li"));
    expect(todoItem.closest("li")).not.toHaveClass("completed");
  });
//ensures a todo can be deleted from the list
  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    const deleteButton = within(todoItem.parentElement).getByText("Delete");

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
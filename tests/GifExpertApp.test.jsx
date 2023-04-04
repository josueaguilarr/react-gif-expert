import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  const newCategory = "Goku";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de haber un titulo inicial de la App", () => {
    const { container } = render(<GifExpertApp />);
    const title = screen.getByRole("heading", { level: 1 });

    expect(title).toBeTruthy();
  });

  test("Debe de agregar una nueva categoria", () => {
    const { container } = render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });
});

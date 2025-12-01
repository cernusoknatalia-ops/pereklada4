import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Translator from "./Translator";
import "@testing-library/jest-dom";

global.fetch = jest.fn();

describe("Translator Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("рендериться базово", () => {
    render(<Translator />);
    expect(screen.getByText("🌐 Перекладач")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Введіть текст...")).toBeInTheDocument();
  });

  test("виконує переклад через LibreTranslate", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ translatedText: "Hello" }),
    });

    render(<Translator />);

    const textarea = screen.getByPlaceholderText("Введіть текст...");
    fireEvent.change(textarea, { target: { value: "Привіт" } });

    await waitFor(() => {
      expect(screen.getByText("👉 Hello")).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("відображає помилку, якщо обидва сервіси не відповіли", async () => {
    fetch.mockRejectedValueOnce(new Error("Libre error"));
    fetch.mockRejectedValueOnce(new Error("MyMemory error"));

    render(<Translator />);

    const textarea = screen.getByPlaceholderText("Введіть текст...");
    fireEvent.change(textarea, { target: { value: "Привіт" } });

    await waitFor(() => {
      expect(
        screen.getByText(/❌ Обидва сервіси недоступні/)
      ).toBeInTheDocument();
    });
  });

  test("змінює напрямок перекладу", () => {
    render(<Translator />);

    const btnEn = screen.getByText(/English → Ukrainian/i);
    fireEvent.click(btnEn);

    expect(btnEn).toHaveClass("active");
  });
});

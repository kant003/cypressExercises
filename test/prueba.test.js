import { describe, expect, it, test, vi } from "vitest";
import { selectFromArray } from "../utils";

describe("empty spec", () => {
  it("sorteo con 3 personas", () => {
    const arr = [1, 4, 5];
    const r = selectFromArray(arr);
    const esta = arr.includes(r);
    expect(esta).toBe(true);

    //expect(r).toBeInstanceOf(Number)
  });
});


async function getUser() {
  return fetch('https://randomuser.me/api/?gender=female')
  .then(r => r.json())
  .then(r => r.results[0])
}

describe("Conjunto de test de prueba", () => {
  it("condición verdadera", async() => {
    const data = {
      name: "Keyboard",
      price: 100,
      stock: 10,
    }
    expect(data).toEqual(
      expect.objectContaining({name: 'Keyboard'})
    )


   //await expect(getUser()).resolves.objectContaining({ gender: 'female' })

  });

  it.skip("condición false", () => {
    const a = 5;
    expect(a).not.toBe(3);
  });
});

describe("Conjunto de test de prueba", () => {
  test("condición verdadera", () => {
    const a = 5;
    expect(a).toBe(5);
  });
});

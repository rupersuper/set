import Team from "../app";

test("Добавление персонажа", () => {
  const team = new Team();
  const character = { name: "Character 1" };
  team.add(character);
  expect(team.toArray()).toEqual([character]);
});

test("Дублирование персонажа", () => {
  const team = new Team();
  const character = { name: "Character 1" };
  team.add(character);
  expect(() => team.add(character)).toThrow("Такой игрок уже существует");
});

test("Проверка метода addAll", () => {
  const team = new Team();
  const character1 = { name: "Character 1" };
  const character2 = { name: "Character 2" };
  team.addAll(character1, character2);
  expect(team.toArray()).toEqual([character1, character2]);
});

test("Дублирование с addAll", () => {
  const team = new Team();
  const character1 = { name: "Character 1" };
  const character2 = { name: "Character 2" };
  team.addAll(character1, character2);
  expect(() => team.addAll(character1, character2)).toThrow(
    "Такой игрок уже существует"
  );
});

test("Проверка toArray", () => {
  const team = new Team();
  const character1 = { name: "Character 1" };
  const character2 = { name: "Character 2" };
  team.addAll(character1, character2);
  expect(team.toArray()).toEqual([character1, character2]);
});

const { registerUser } = require('./registration');

test('Регистрация на нов потребител', () => {
  expect(registerUser('username', 'password')).toBe('Потребителят е успешно регистриран');
});

const { loginUser } = require('./login');

test('Влизане в системата', () => {
  expect(loginUser('username', 'password')).toBe('Влизане успешно');
});

const Engineer = require('../lib/Engineer');

test('tests for engineer properties', () => {
    const engineer = new Engineer('Priscilla', 37, 'priscilla@email.com', 'pcilla');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('tests for engineer methods', () => {
    const engineer = new Engineer('Priscilla', 37, 'priscilla@email.com', 'pcilla');

    expect(engineer.getName()).toEqual('Priscilla');
    expect(engineer.getId()).toEqual(37);
    expect(engineer.getEmail()).toEqual('priscilla@email.com');
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toEqual('pcilla');
});
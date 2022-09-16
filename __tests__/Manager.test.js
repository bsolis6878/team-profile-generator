const Manager = require('../lib/Manager');

test('tests for manager properties', () => {
    const manager = new Manager('Kevin', 22, 'kevin@email.com', '2103334444');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('tests for manager methods', () => {
    const manager = new Manager('Kevin', 22, 'kevin@email.com', '2103334444');

    expect(manager.getName()).toEqual('Kevin');
    expect(manager.getId()).toEqual(22);
    expect(manager.getEmail()).toEqual('kevin@email.com');
    expect(manager.getRole()).toEqual('Manager');
});
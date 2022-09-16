const Employee = require('../lib/Employee');

test('tests for employee properties', () => {
    const employee = new Employee('Dave', 42, 'fake@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('tests for employee methods', () => {
    const employee = new Employee('Dave', 42, 'fake@email.com');

    expect(employee.getName()).toEqual('Dave');
    expect(employee.getId()).toEqual(42);
    expect(employee.getEmail()).toEqual('fake@email.com');
    expect(employee.getRole()).toEqual('Employee');
});
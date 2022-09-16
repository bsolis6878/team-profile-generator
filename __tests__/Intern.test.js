const Intern = require('../lib/Intern');

test('tests for intern properties', () => {
    const intern = new Intern('Stacy', 12, 'stacy@email.com', 'MIT');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('tests for intern methods', () => {
    const intern = new Intern('Stacy', 12, 'stacy@email.com', 'MIT');

    expect(intern.getName()).toEqual('Stacy');
    expect(intern.getId()).toEqual(12);
    expect(intern.getEmail()).toEqual('stacy@email.com');
    expect(intern.getRole()).toEqual('Intern');
    expect(intern.getSchool()).toEqual('MIT');
});
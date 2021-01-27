
test ("add function to check that you are allowed to buy beer", () => {
//ARRANGE
    const age = 19
//ACT
    const number = checkAge(age)

//ASSERT
    expect(number).toBe(true)
});
//* Завдання 2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 7, 2, 8, 10, -6]

// Приклад вихідних даних: 9

const sumOfPositiveMultiplesOfThree = function(arr) {
    return arr.reduce((sum, num) => {
        if (num > 0 && num % 3 === 0) {
            sum += num;
        }
        return sum;
    }, 0);
};

const inputArray = [3, 5, -9, 7, 2, 8, 10, -6];
console.log(sumOfPositiveMultiplesOfThree(inputArray));
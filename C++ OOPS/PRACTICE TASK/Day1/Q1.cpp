//Q1. Calculator
#include <iostream>
using namespace std;

class Calculator {
public:
    void performOperation(float a, float b, char op) {
        switch (op) {
            case '+': cout << "Sum = " << a + b; break;
            case '-': cout << "Difference = " << a - b; break;
            case '*': cout << "Product = " << a * b; break;
            case '/':
                if (b != 0) cout << "Quotient = " << a / b;
                else cout << "Division by zero not allowed!";
                break;
            default:
                cout << "Invalid Operator!";
        }
    }
};

int main() {
    float num1, num2;
    char op;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    cout << "Enter operator (+, -, *, /): ";
    cin >> op;

    Calculator calc;
    calc.performOperation(num1, num2, op);

    return 0;
}

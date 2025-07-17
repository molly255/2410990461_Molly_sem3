#include <iostream>
#include <cmath>
using namespace std;

class NumberProperties {
public:
    void check(int n) {
        // Check even or odd
        if (n % 2 == 0)
            cout << "Even\n";
        else
            cout << "Odd\n";

        // Check sign
        if (n > 0)
            cout << "Positive\n";
        else if (n < 0)
            cout << "Negative\n";
        else
            cout << "Zero\n";

        // Count digits
        int absN = abs(n);
        if (absN < 10)
            cout << "Single digit\n";
        else if (absN < 100)
            cout << "Double digit\n";
        else
            cout << "More than two digits\n";
    }
};

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;

    NumberProperties obj;
    obj.check(num);

    return 0;
}

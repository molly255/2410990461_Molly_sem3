#include <iostream>
using namespace std;

class Interest {
public:
    // Calculate Simple Interest = (P × R × T) / 100
    float calculate(float p, float r, float t) {
        return (p * r * t) / 100;
    }
};

int main() {
    float principal, rate, time;
    cout << "Enter Principal, Rate (%), Time (years): ";
    cin >> principal >> rate >> time;

    Interest si;
    float result = si.calculate(principal, rate, time);

    cout << "Simple Interest = " << result;
    return 0;
}

//Q2: Grade Calculator

#include <iostream>
using namespace std;

class GradeCalculator {
private:
    int marks[5];
    int total = 0;
    float average;

public:
    // Take input for 5 subjects
    void inputMarks() {
        cout << "Enter marks for 5 subjects: ";
        for (int i = 0; i < 5; i++) {
            cin >> marks[i];
            total += marks[i];
        }
        average = total / 5.0;
    }

    // Display total, average and grade
    void displayResult() {
        cout << "Total = " << total << endl;
        cout << "Average = " << average << endl;

        if (average >= 90) cout << "Grade: A";
        else if (average >= 80) cout << "Grade: B";
        else if (average >= 70) cout << "Grade: C";
        else if (average >= 60) cout << "Grade: D";
        else cout << "Grade: F";
    }
};

int main() {
    GradeCalculator student;
    student.inputMarks();
    student.displayResult();
    return 0;
}

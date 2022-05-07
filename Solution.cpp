
#include <string>
#include <deque>
using namespace std;

class Solution {

    struct Pair {
        char letter;
        int frequency;
        Pair(char letter, int frequency) : letter{letter}, frequency{frequency}{}
        Pair() = default;
        ~Pair() = default;
    };

public:
    string removeDuplicates(string input, int numberOfConsecutiveDuplicates) {

        deque<Pair> stack;
        for (int i = 0; i < input.length(); ++i) {

            char current = input[i];
            if (stack.empty() || stack.front().letter != current) {
                stack.emplace_front(current, 1);
                continue;
            }
            if (++stack.front().frequency == numberOfConsecutiveDuplicates) {
                stack.pop_front();
            }
        }

        return convertStackToString(stack);
    }
    
private:
    string convertStackToString(deque<Pair>& stack) {
        string result;
        while (!stack.empty()) {
            while (stack.back().frequency-- > 0) {
                result.push_back(stack.back().letter);
            }
            stack.pop_back();
        }
        return result;
    }
};

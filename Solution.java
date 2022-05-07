
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {

    public String removeDuplicates(String input, int numberOfConsecutiveDuplicates) {

        Deque<Pair> stack = new ArrayDeque<>();
        for (int i = 0; i < input.length(); ++i) {

            char current = input.charAt(i);
            if (stack.isEmpty() || stack.peek().letter != current) {
                stack.push(new Pair(current, 1));
                continue;
            }
            if (++stack.peek().frequency == numberOfConsecutiveDuplicates) {
                stack.pop();
            }
        }

        return convertStackToString(stack);
    }

    private String convertStackToString(Deque<Pair> stack) {
        StringBuilder result = new StringBuilder();
        while (!stack.isEmpty()) {
            while (stack.peekLast().frequency-- > 0) {
                result.append(stack.peekLast().letter);
            }
            stack.pollLast();
        }
        return result.toString();
    }
}

class Pair {

    char letter;
    int frequency;

    public Pair(char letter, int frequency) {
        this.letter = letter;
        this.frequency = frequency;
    }
}

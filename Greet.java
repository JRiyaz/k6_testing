import java.util.Arrays;

public class Greet {

    public static void main(String... args) {
        Greet grt = new Greet();
        int[] numbers = { -123, 0, 456, 789, -987654321, 1234567890, -98765 };
        // int[] numbers = { -98765 };
        // Arrays.stream(numbers).forEach(num -> System.out.println(num + " === " + grt.greet(num)));
        grt.experiment();
    }

    public int greet(int num) {
        int sign = num > 0 ? 1 : -1, result = 0, number = num * sign;

        // while (number > 0) {
        //     int last_digi = number % 10;
        //     result = (result * 10) + last_digi;
        //     number = (int) number / 10;
        // }

        do {
            int last_digi = number % 10;
            result = (result * 10) + last_digi;
        }
        while ((number /= 10) > 0);

        return result * sign;
    }

    public void experiment() {
        int num = 10;
        String str = "";
        while (num-- > 0)
            str += num;
        System.out.println("str: " + str + " length: " + str.length());
    }
}

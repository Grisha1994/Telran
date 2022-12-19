import java.util.Random;
import java.util.Scanner;

public class Main {

    static Scanner scanner = new Scanner(System.in);
    static Random random = new Random();

    public static void main(String[] args) {

//        int a = scanner.nextInt();
//        int b = scanner.nextInt();
//        int c = scanner.nextInt();
//
//
//        int sum = sum(a,b);
//        System.out.println("Summa chisel: " + sum);
//
//       min(c, sum);
//
//
//        int e = scanner.nextInt();
//        switch (e){
//
//            case 1:
//                System.out.println("e = 1 из switch");
//            case 4:
//                System.out.println("e = 4 из switch");
//                break;
//            case 6:
//                System.out.println("e = 6 из switch");
//                break;
//            case 7:
//                System.out.println("e = 7 из switch");
//                break;
//            case 8:
//                System.out.println("e = 8 из switch");
//                break;
//
//            default:
//                System.out.println("error");
//        }


        int[] arr = new int[5];

        int[] sum = arr;



        System.out.println(arrayRandom(arr));
        System.out.println(arrRandom(arr));

        Area solver = new Area();
        double x = scanner.nextDouble();
        double y = scanner.nextDouble();
        System.out.println("Ploschad priamoygolnica: " + Area.rectangle(x,y));
        System.out.println("Ploschad treygolnika: " + Area.triangle(x,y));
        System.out.println("Ploschad kryga: " + Area.circle(x));


    }


    static int sum(int a, int b) {
        return a + b;
    }

    public static void min(int c, int sum) {
        if (sum >= c) {
            System.out.println("Summa bolhe zadonnogo znacheniya: " + sum);
        } else {
            System.out.println("Summa menshe zadonnogo znacheniya: " + c);
        }
    }

    public static int arrayRandom(int[] arr) {
        int s = 0;
        for (int i = 0; i < arr.length; i++) {
            arr[i] = random.nextInt(20);
            System.out.print(arr[i] + " ");
            s += arr[i];
        }
        System.out.println();
        return s;
    }

    public static int arrRandom(int[] arr) {
        int p = 1;
        for (int i = 0; i < arr.length; i++) {
            p *= arr[i];
        }
        return p;

    }
}
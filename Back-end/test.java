package org.example;

public class Main {
    public static void main(String[] args) {
        CONTA conta1 = new CONTA(1001);
        CONTA conta2 = new CONTA(1002);

        System.out.println("Número conta1: " + conta1.getNumero());
        System.out.println("Número conta2: " + conta2.gerNumero());
    }
}
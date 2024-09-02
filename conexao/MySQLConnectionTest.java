import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConnectionTest {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/poo_favip";
        String user = "root"; // Substitua pelo seu usuário
        String password = "password"; // Substitua pela sua senha

        try {
            // Carregar o driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Estabelecer a conexão
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Conexão bem-sucedida!");

            // Fechar a conexão
            conn.close();
        } catch (ClassNotFoundException e) {
            System.out.println("Driver não encontrado: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("Erro de SQL: " + e.getMessage());
        }
    }
}
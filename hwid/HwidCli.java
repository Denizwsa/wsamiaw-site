import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

/** Same HWID as Wsamiaw client — run: javac HwidCli.java && java HwidCli */
public class HwidCli {
    public static void main(String[] args) {
        System.out.println(compute());
    }

    static String compute() {
        StringBuilder sb = new StringBuilder();
        sb.append(System.getProperty("os.name", ""));
        sb.append('|').append(System.getProperty("os.arch", ""));
        sb.append('|').append(System.getProperty("user.name", ""));
        String proc = System.getenv("PROCESSOR_IDENTIFIER");
        if (proc != null) sb.append('|').append(proc);
        return sha256Hex(sb.toString()).substring(0, 32);
    }

    static String sha256Hex(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] digest = md.digest(input.getBytes(StandardCharsets.UTF_8));
            StringBuilder out = new StringBuilder();
            for (byte b : digest) out.append(String.format("%02x", b));
            return out.toString();
        } catch (Exception e) {
            return Integer.toHexString(input.hashCode());
        }
    }
}

package amura.selenium.steps;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * Created by amura on 3/10/18.
 */
public class ZipUtils {


//   static List<String> filesListInDir = new ArrayList<String>();
//    File dir = new File("/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/target/output-reports/cucumber-extent-reports/media-plan-wizard");
//    String zipDirName = "/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/target/output-reports/cucumber-extent-reports/media-plan-wizard.zip";
//
//    public static void pack(File dir, String zipDirName) {
//            try {
//                populateFilesList(dir);
//                //now zip files one by one
//                //create ZipOutputStream to write to the zip file
//                FileOutputStream fos = new FileOutputStream(zipDirName);
//                ZipOutputStream zos = new ZipOutputStream(fos);
//                for(String filePath : filesListInDir){
//                    System.out.println("Zipping "+filePath);
//                    //for ZipEntry we need to keep only relative file path, so we used substring on absolute path
//                    ZipEntry ze = new ZipEntry(filePath.substring(dir.getAbsolutePath().length()+1, filePath.length()));
//                    zos.putNextEntry(ze);
//                    //read the file and write to ZipOutputStream
//                    FileInputStream fis = new FileInputStream(filePath);
//                    byte[] buffer = new byte[1024];
//                    int len;
//                    while ((len = fis.read(buffer)) > 0) {
//                        zos.write(buffer, 0, len);
//                    }
//                    zos.closeEntry();
//                    fis.close();
//                }
//                zos.close();
//                fos.close();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
//
//    private static void populateFilesList(File dir) throws IOException {
//
//        File[] files = dir.listFiles();
//        for (File file : files) {
//            if (file.isFile()) filesListInDir.add(file.getAbsolutePath());
//            else populateFilesList(file);
//        }
//    }

    public static void zip(){
        byte[] buffer = new byte[1024];

        try{

            FileOutputStream fos = new FileOutputStream("/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/target/output-reports/cucumber-extent-reports/media-plan-wizard/MediaPlan.zip");
            ZipOutputStream zos = new ZipOutputStream(fos);
            ZipEntry ze= new ZipEntry("report.html");
            zos.putNextEntry(ze);
            FileInputStream in = new FileInputStream("/home/amura/Desktop/Hawkeyeselenium/hawkeyeselenium/target/output-reports/cucumber-extent-reports/media-plan-wizard/report.html");

            int len;
            while ((len = in.read(buffer)) > 0) {
                zos.write(buffer, 0, len);
            }

            in.close();
            zos.closeEntry();

            //remember close it
            zos.close();

            System.out.println("File is converted to zip");

        }catch(IOException ex){
            ex.printStackTrace();
        }
    }
}

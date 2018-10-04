package amura.selenium.config;

import java.util.Properties;



/**
 * Created by amura on 6/9/18.
 */
public class ConfigFileReader
{

    public String getReportConfigPath()
    {
        String reportConfigPath = new Properties().getProperty("reportConfigPath");
        if(reportConfigPath!= null) return reportConfigPath;
        else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");
    }
}

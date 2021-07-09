package io.github.jordanmartin.datagenerator.server.domain;

import io.github.jordanmartin.datagenerator.definition.YamlDefinitionParser;
import io.github.jordanmartin.datagenerator.output.ObjectOuput;
import io.github.jordanmartin.datagenerator.output.ObjectWriterOuput;
import io.github.jordanmartin.datagenerator.provider.object.ObjectProvider;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProviderConf {
    private String name;
    private String template;
    private String format;
    private ObjectProvider provider;
    private ObjectWriterOuput output;
    private String contentType;

    public static ProviderConf from(String name, String template, String format) {
        ProviderConf providerConf = new ProviderConf();
        YamlDefinitionParser parser = new YamlDefinitionParser(template);
        ObjectProvider provider = parser.parse();
        ObjectOuput objectOutput = ObjectOuput.from(provider);

        switch (format) {
            case "yaml":
                providerConf.setOutput(objectOutput.toYaml());
                providerConf.setContentType("text/yaml");
                break;
            case "sql":
                providerConf.setOutput(objectOutput.toSQL());
                providerConf.setContentType("text/sql");
                break;
            case "csv":
                providerConf.setOutput(objectOutput.toCsv());
                providerConf.setContentType("text/csv");
                break;
            case "xml":
                providerConf.setOutput(objectOutput.toXml());
                providerConf.setContentType("text/xml");
                break;
            default:
                providerConf.setOutput(objectOutput.toJson());
                providerConf.setContentType("application/json");
                break;
        }
        
        providerConf.setProvider(provider);
        providerConf.setTemplate(template);
        providerConf.setFormat(format);
        providerConf.setName(name);

        return providerConf;
    }
}

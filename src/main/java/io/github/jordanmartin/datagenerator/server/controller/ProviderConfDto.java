package io.github.jordanmartin.datagenerator.server.controller;

import io.github.jordanmartin.datagenerator.definition.YamlDefinitionParser;
import io.github.jordanmartin.datagenerator.output.ObjectOuput;
import io.github.jordanmartin.datagenerator.output.ObjectWriterOuput;
import io.github.jordanmartin.datagenerator.provider.object.ObjectProvider;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProviderConfDto {
    private String href;
    private String name;
    private String template;
    private String format;
}

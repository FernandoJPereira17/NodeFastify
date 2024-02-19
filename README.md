# Como degubar no VSCode com o NodeJs

1 - Clicar no botão Run and Debug

![image](https://github.com/angelolustosa/node-fastify/assets/15823158/3bfd4e38-dd6e-4802-a143-8fc623ee64b5)

2 - Clicar em : create a launch.json file

![image](https://github.com/angelolustosa/node-fastify/assets/15823158/4fdf89bc-9f32-4d84-90e5-f7fd3424f5d9)

3 - Selecionar: Node

![image](https://github.com/angelolustosa/node-fastify/assets/15823158/c43c8e48-8f1c-495c-a57a-7f342ef16752)

4 - Alteral o valor de "program": apontando para o nome do arquivo que executa a aplicação, neste exemplo: "server.js"
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\server.js"
        }
    ]
}
```

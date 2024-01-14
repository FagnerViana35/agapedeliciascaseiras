// ContatoForm.js
import { useState } from "react";
import { Form, Label, Input, Button, ContainerContact, FormDescription } from "./styles";
import { Container } from "lucide-react";

const ContatoForm = () => {
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState("");
  const [telefoneContato, setTelefoneContato] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Lógica para lidar com os dados do formulário (enviar para um servidor, etc.)
    console.log("Dados do formulário:", { nomeEstabelecimento, telefoneContato, email });
  };

  return (
    <ContainerContact id="form_contact">
    <Form onSubmit={handleSubmit}>
      <Label>
        Nome do Estabelecimento:
        <Input
          type="text"
          value={nomeEstabelecimento}
          onChange={(e) => setNomeEstabelecimento(e.target.value)}
        />
      </Label>

      <Label>
        Telefone de Contato:
        <Input
          type="tel"
          value={telefoneContato}
          onChange={(e) => setTelefoneContato(e.target.value)}
        />
      </Label>

      <Label>
        E-mail:
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>

      <Button type="submit">Enviar</Button>
    </Form>
    <FormDescription>
        OI
    </FormDescription>
    </ContainerContact>

  );
};

export default ContatoForm;

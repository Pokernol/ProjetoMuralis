import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import './Modals.css'
import directory from './img/icons8-directory.svg';

function Modals(props) {
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = (e) => {
    let { value } = e.target;
    setUnmountOnClose(JSON.parse(value));
  };

  const cidades = {
    sao_paulo: ["Mogi das Cruzes", "Suzano", "Poa", "Guararema"],
    rio_de_janeiro: ["Angra dos Reis", "Niterói", "Itaboraí"],
    minas_gerais: ["Belo Horizonte", "Monte Azul", "Muzambinho"]
  };

  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadesSelecionadas, setCidadesSelecionadas] = useState([]);

  const handleEstadoChange = (event) => {
    const estadoSelecionado = event.target.value;
    setEstadoSelecionado(estadoSelecionado);
    setCidadesSelecionadas(cidades[estadoSelecionado]);
  };

  return (
    <div>
      <Button className='bt_size item_nav_color d-flex' onClick={toggle}>
      <img className='me-2' src={directory} alt=''/>
      <span className='hidden'>Ingressantes</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <div className='bg_blue_title text-light'>
          <ModalHeader toggle={toggle}>Cadastro de Ingressante</ModalHeader>
        </div>
        <ModalBody>
          <Input className="mb-3" placeholder="Nome" />
          <Input className="mb-3" type="select" onChange=''>
            <option value="">Selecione o Curso</option>
            <option value="matematica">Matematica</option>
            <option value="letras">Letras</option>
            <option value="geografia">Geografia</option>
          </Input>
          <Input className="mb-3" type="select" value={estadoSelecionado} onChange={handleEstadoChange}>
            <option value="">Selecione o Estado</option>
            <option value="sao_paulo">São Paulo</option>
            <option value="rio_de_janeiro">Rio de Janeiro</option>
            <option value="minas_gerais">Minas Gerais</option>
          </Input>
          <Input className="mb-3" type="select" value={cidadesSelecionadas} onChange={(event) => setCidadesSelecionadas([event.target.value])}>
            <option value="">Selecione a Cidade</option>
            {cidadesSelecionadas.map((cidade) => ( <option key={cidade} value={cidade}> {cidade} </option>))}
          </Input>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" outline size="sm" onClick={toggle}>
            Voltar
          </Button>{" "}
          <Button color="success" outline onClick={toggle}>
            Gravar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modals;

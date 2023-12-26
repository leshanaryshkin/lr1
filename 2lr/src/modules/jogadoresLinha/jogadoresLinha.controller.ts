import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class JogadoresLinhaController {
  async index(req: Request, res: Response) {
    const { equipeID, ano } = req.query;

    if (equipeID && ano) {
      const jogadoresLinha = await prisma.jogadorLinha.findMany({
        where: {
          equipeId: Number(equipeID),
          ano: Number(ano),
        },
      });
      return res.json(jogadoresLinha);
    }
    const jogadorLinha = await prisma.jogadorLinha.findMany();
    return res.json(jogadorLinha);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const jogadorLinha = await prisma.jogadorLinha.findUnique({
      where: { id: Number(id) },
    });
    return res.json(jogadorLinha);
  }

  async store(req: Request, res: Response) {
    const jogadorLinha = await prisma.jogadorLinha.create({
      data: {
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        passaporte: req.body.passaporte,
        ano: Number(req.body.ano),
        posicao: req.body.posicao,
        idade: Number(req.body.idade),
        equipe: {
          connect: {
            id: Number(req.body.equipe),
          },
        },
      },
    });

    return res.json(jogadorLinha);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const jogadorLinha = await prisma.jogadorLinha.update({
      where: { id: Number(id) },
      data: {
        ano: req.body.ano,
        posicao: req.body.posicao,
        equipe: req.body.equipe,
        idade: req.body.idade,
        gols: req.body.gols,
        assistencias: req.body.assistencias,
        cartoesAmarelos: req.body.cartoesAmarelos,
        cartoesVermelhos: req.body.cartoesVermelhos,
      },
    });

    const jogadoresLinhaDaEdicao = await prisma.jogadorLinha.findMany({
      where: { ano: req.body.ano },
    });

    return res.json({ jogadorLinha, jogadoresLinhaDaEdicao });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await prisma.jogadorLinha.delete({
      where: { id: Number(id) },
    });

    return res.json({ message: "JogadorLinha deletado com sucesso!" });
  }
}

export default new JogadoresLinhaController();

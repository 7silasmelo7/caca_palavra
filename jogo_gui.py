import random
import tkinter as tk
from tkinter import messagebox, font

class JogoAdivinhacaoGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("🎮 Jogo de Adivinhação")
        self.root.geometry("600x700")
        self.root.configure(bg="#f0f4f8")
        self.root.resizable(False, False)
        
        # Banco de palavras
        self.banco_palavras = ["remo", "paysandu", "belem", "introdução", "pomine"]
        
        # Variáveis do jogo
        self.palavra = ""
        self.seletor_palavra = []
        self.tentativas = 5
        self.letras_usadas = set()
        
        # Configurar fontes
        self.fonte_titulo = font.Font(family="Arial", size=24, weight="bold")
        self.fonte_palavra = font.Font(family="Courier", size=32, weight="bold")
        self.fonte_botao = font.Font(family="Arial", size=12, weight="bold")
        self.fonte_info = font.Font(family="Arial", size=14)
        
        self.criar_interface()
        self.novo_jogo()
    
    def criar_interface(self):
        # Título
        titulo = tk.Label(
            self.root,
            text="🎮 Jogo de Adivinhação",
            font=self.fonte_titulo,
            bg="#4f46e5",
            fg="white",
            pady=20
        )
        titulo.pack(fill=tk.X)
        
        # Frame principal
        frame_principal = tk.Frame(self.root, bg="#f0f4f8")
        frame_principal.pack(pady=20, padx=20, fill=tk.BOTH, expand=True)
        
        # Informações do jogo
        self.label_tentativas = tk.Label(
            frame_principal,
            text="Tentativas: 5",
            font=self.fonte_info,
            bg="#f0f4f8",
            fg="#1f2937"
        )
        self.label_tentativas.pack(pady=10)
        
        # Display da palavra
        frame_palavra = tk.Frame(frame_principal, bg="#ffffff", relief=tk.RAISED, bd=2)
        frame_palavra.pack(pady=20, padx=20, fill=tk.X)
        
        self.label_palavra = tk.Label(
            frame_palavra,
            text="_ _ _ _ _",
            font=self.fonte_palavra,
            bg="#ffffff",
            fg="#1f2937",
            pady=30
        )
        self.label_palavra.pack()
        
        # Campo de entrada
        frame_input = tk.Frame(frame_principal, bg="#f0f4f8")
        frame_input.pack(pady=20)
        
        tk.Label(
            frame_input,
            text="Digite uma letra:",
            font=self.fonte_info,
            bg="#f0f4f8",
            fg="#1f2937"
        ).pack(side=tk.LEFT, padx=5)
        
        self.entrada_letra = tk.Entry(
            frame_input,
            font=self.fonte_info,
            width=5,
            justify="center",
            bg="#ffffff",
            relief=tk.SOLID,
            bd=2
        )
        self.entrada_letra.pack(side=tk.LEFT, padx=5)
        self.entrada_letra.bind("<Return>", lambda e: self.verificar_letra())
        
        btn_verificar = tk.Button(
            frame_input,
            text="Verificar",
            command=self.verificar_letra,
            font=self.fonte_botao,
            bg="#10b981",
            fg="white",
            relief=tk.FLAT,
            padx=20,
            pady=8,
            cursor="hand2"
        )
        btn_verificar.pack(side=tk.LEFT, padx=5)
        
        # Letras usadas
        self.label_letras_usadas = tk.Label(
            frame_principal,
            text="Letras usadas: ",
            font=self.fonte_info,
            bg="#f0f4f8",
            fg="#6b7280",
            wraplength=500
        )
        self.label_letras_usadas.pack(pady=10)
        
        # Mensagem de feedback
        self.label_mensagem = tk.Label(
            frame_principal,
            text="",
            font=self.fonte_info,
            bg="#f0f4f8",
            fg="#4f46e5",
            wraplength=500
        )
        self.label_mensagem.pack(pady=10)
        
        # Botão novo jogo
        btn_novo_jogo = tk.Button(
            frame_principal,
            text="🔄 Novo Jogo",
            command=self.novo_jogo,
            font=self.fonte_botao,
            bg="#4f46e5",
            fg="white",
            relief=tk.FLAT,
            padx=30,
            pady=10,
            cursor="hand2"
        )
        btn_novo_jogo.pack(pady=20)
        
        # Footer
        footer = tk.Label(
            self.root,
            text="💡 Dica: Pressione Enter após digitar a letra",
            font=("Arial", 10),
            bg="#e5e7eb",
            fg="#6b7280",
            pady=10
        )
        footer.pack(fill=tk.X, side=tk.BOTTOM)
    
    def novo_jogo(self):
        """Inicia um novo jogo"""
        self.palavra = random.choice(self.banco_palavras).lower()
        self.seletor_palavra = ['_'] * len(self.palavra)
        self.tentativas = 5
        self.letras_usadas = set()
        
        self.atualizar_interface()
        self.label_mensagem.config(text="Boa sorte! Comece adivinhando as letras.", fg="#4f46e5")
        self.entrada_letra.config(state=tk.NORMAL)
        self.entrada_letra.focus()
    
    def verificar_letra(self):
        """Verifica se a letra digitada está na palavra"""
        letra = self.entrada_letra.get().lower().strip()
        self.entrada_letra.delete(0, tk.END)
        
        # Validações
        if not letra:
            self.label_mensagem.config(text="⚠️ Digite uma letra!", fg="#ef4444")
            return
        
        if len(letra) != 1 or not letra.isalpha():
            self.label_mensagem.config(text="⚠️ Digite apenas uma letra!", fg="#ef4444")
            return
        
        if letra in self.letras_usadas:
            self.label_mensagem.config(text="⚠️ Você já usou essa letra!", fg="#ef4444")
            return
        
        # Adicionar letra às usadas
        self.letras_usadas.add(letra)
        
        # Verificar se a letra está na palavra
        if letra in self.palavra:
            for i in range(len(self.palavra)):
                if self.palavra[i] == letra:
                    self.seletor_palavra[i] = letra
            
            self.label_mensagem.config(text="✅ Parabéns! Você acertou!", fg="#10b981")
        else:
            self.tentativas -= 1
            self.label_mensagem.config(
                text=f"❌ Letra não encontrada! Tentativas restantes: {self.tentativas}",
                fg="#ef4444"
            )
        
        self.atualizar_interface()
        self.verificar_fim_jogo()
    
    def atualizar_interface(self):
        """Atualiza os elementos visuais"""
        # Atualizar palavra
        palavra_display = ' '.join(self.seletor_palavra)
        self.label_palavra.config(text=palavra_display)
        
        # Atualizar tentativas
        cor_tentativas = "#ef4444" if self.tentativas <= 2 else "#1f2937"
        self.label_tentativas.config(
            text=f"Tentativas: {self.tentativas}",
            fg=cor_tentativas
        )
        
        # Atualizar letras usadas
        letras_ordenadas = sorted(list(self.letras_usadas))
        self.label_letras_usadas.config(
            text=f"Letras usadas: {', '.join(letras_ordenadas).upper()}"
        )
    
    def verificar_fim_jogo(self):
        """Verifica se o jogo terminou"""
        # Vitória
        if '_' not in self.seletor_palavra:
            self.entrada_letra.config(state=tk.DISABLED)
            messagebox.showinfo(
                "🎉 Vitória!",
                f"Parabéns! Você adivinhou a palavra: {self.palavra.upper()}"
            )
            return
        
        # Derrota
        if self.tentativas == 0:
            self.entrada_letra.config(state=tk.DISABLED)
            messagebox.showwarning(
                "😢 Game Over",
                f"Suas tentativas acabaram!\nA palavra era: {self.palavra.upper()}"
            )

if __name__ == "__main__":
    root = tk.Tk()
    jogo = JogoAdivinhacaoGUI(root)
    root.mainloop()

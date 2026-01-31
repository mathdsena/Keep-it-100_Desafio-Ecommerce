using Microsoft.EntityFrameworkCore;
using TechChallengeApi.Models; 

namespace TechChallengeApi.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}

		public DbSet<Product> Products { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
            modelBuilder.Entity<Product>().HasData(
                    new Product
                    {
                        Id = 1, 
                        Name = "Vinil: The Tortured Poets Dept.",
                        Price = 589.90m,
                        ImageUrl = "/img/ttpd.png",
                        Description = "Capas colecionáveis de álbuns, incluindo fotos inéditas. Encarte colecionável de 24 páginas encadernada em livro com três letras manuscritas exclusivas para este vinil e fotos inéditas\r\n"
                    },
                    new Product
                    {
                        Id = 2,
                        Name = "Vinil: Folklore (LP Vermelho - Target)",
                        Price = 600.00m,
                        ImageUrl = "/img/folklore.png",
                        Description = "O oitavo álbum de Taylor Swift, folklore foi lançado de forma surpreendente em julho de 2020. Possui 17 faixas, incluindo o single  “Cardigan”."
                    },
                    new Product
                    {
                        Id = 3,
                        Name = "Vinil: Midnights (LP Azul)",
                        Price = 489.90m,
                        ImageUrl = "/img/midnights.png",
                        Description = "Intitulado “midnights”, o trabalho é descrito por Taylor “como uma coleção de 13 faixas escritas durante a madrugada, uma jornada de terror e doces sonhos”. O lançamento ocorre em 21 de outubro de 2022."
                    },
                    new Product
                    {
                        Id = 4,
                        Name = "Vinil: Everyone’s a Star (Autografado)",
                        Price = 389.90m,
                        ImageUrl = "/img/EAS.png",
                        Description = "Vinil 5 Seconds Of Summer – Everyone’s a Star (Autografado)."
                    },
                    new Product
                    {
                        Id = 5,
                        Name = "Vinil: Breach (Target Edition)",
                        Price = 420.00m,
                        ImageUrl = "/img/breach.png",
                        Description = "Tricô creme texturizado com estrelas prateadas bordadas nos cotovelos."
                    },
                    new Product
                    {
                        Id = 6,
                        Name = "Vinil: Man's Best Friend D2C Bonus Track LP",
                        Price = 549.90m,
                        ImageUrl = "/img/MBF.png",
                        Description = "Man’s Best Friend é o mais recente álbum da multifacetada popstar global Sabrina Carpenter. Após seu projeto vencedor do GRAMMY Short n’ Sweet e vários singles multi-platina adicionados ao seu currículo, o mais recente de Carpenter apresenta seu novo single “Manchild”, disponível agora. disco opaco azul claro imagem em formato gatefold pôster padrão encarte (com a lista de faixas) capa de vinil (com os créditos)."
                    }
                );
        }
	}
}
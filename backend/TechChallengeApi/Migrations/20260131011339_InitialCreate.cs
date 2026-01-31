using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TechChallengeApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Price = table.Column<decimal>(type: "TEXT", nullable: false),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "Capas colecionáveis de álbuns, incluindo fotos inéditas. Encarte colecionável de 24 páginas encadernada em livro com três letras manuscritas exclusivas para este vinil e fotos inéditas\r\n", "/img/ttpd.png", "Vinil: The Tortured Poets Dept.", 589.90m },
                    { 2, "O oitavo álbum de Taylor Swift, folklore foi lançado de forma surpreendente em julho de 2020. Possui 17 faixas, incluindo o single  “Cardigan”.", "/img/folklore.png", "Vinil: Folklore (LP Vermelho - Target)", 600.00m },
                    { 3, "Intitulado “midnights”, o trabalho é descrito por Taylor “como uma coleção de 13 faixas escritas durante a madrugada, uma jornada de terror e doces sonhos”. O lançamento ocorre em 21 de outubro de 2022.", "/img/midnights.png", "Vinil: Midnights (LP Azul)", 489.90m },
                    { 4, "Vinil 5 Seconds Of Summer – Everyone’s a Star (Autografado).", "/img/EAS.png", "Vinil: Everyone’s a Star (Autografado)", 389.90m },
                    { 5, "Tricô creme texturizado com estrelas prateadas bordadas nos cotovelos.", "/img/breach.png", "Vinil: Breach (Target Edition)", 420.00m },
                    { 6, "Man’s Best Friend é o mais recente álbum da multifacetada popstar global Sabrina Carpenter. Após seu projeto vencedor do GRAMMY Short n’ Sweet e vários singles multi-platina adicionados ao seu currículo, o mais recente de Carpenter apresenta seu novo single “Manchild”, disponível agora. disco opaco azul claro imagem em formato gatefold pôster padrão encarte (com a lista de faixas) capa de vinil (com os créditos).", "/img/MBF.png", "Vinil: Man's Best Friend D2C Bonus Track LP", 549.90m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}

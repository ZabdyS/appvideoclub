using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace VideoClub.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialLoad : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.CreateTable(
                name: "Articulos",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Titulo = table.Column<string>(type: "VarChar(600)", nullable: false),
                    RentaDia = table.Column<decimal>(type: "Decimal(8,2)", nullable: false),
                    DiasRenta = table.Column<int>(type: "Int", nullable: false),
                    EntregaTardia = table.Column<decimal>(type: "Decimal(8,2)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    TipoArticuloId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articulos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Idiomas",
                schema: "dbo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descripcion = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Idiomas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TiposArticulos",
                schema: "dbo",
                columns: table => new
                {
                    TipoArticuloId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descripcion = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TiposArticulos", x => x.TipoArticuloId);
                });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Idiomas",
                columns: new[] { "Id", "Descripcion", "IsActive" },
                values: new object[,]
                {
                    { 1, "Español", true },
                    { 2, "Ingles", true },
                    { 3, "Frances", true }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Articulos",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "Idiomas",
                schema: "dbo");

            migrationBuilder.DropTable(
                name: "TiposArticulos",
                schema: "dbo");
        }
    }
}

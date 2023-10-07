using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VideoClub.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddedNewType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TipoArticuloId",
                schema: "dbo",
                table: "TiposArticulos",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                schema: "dbo",
                table: "TiposArticulos",
                newName: "TipoArticuloId");
        }
    }
}

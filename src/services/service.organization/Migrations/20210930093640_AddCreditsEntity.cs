using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace service.organization.Migrations
{
    public partial class AddCreditsEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "credits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    expirationDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    creditName = table.Column<string>(type: "text", nullable: true),
                    amountUsed = table.Column<double>(type: "double precision", nullable: false),
                    amountRemaining = table.Column<double>(type: "double precision", nullable: false),
                    organizationId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_credits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_credits_organization_organizationId",
                        column: x => x.organizationId,
                        principalTable: "organization",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_credits_organizationId",
                table: "credits",
                column: "organizationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "credits");
        }
    }
}

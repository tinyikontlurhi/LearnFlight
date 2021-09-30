using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace service.organization.Migrations
{
    public partial class AddBillingEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "billing",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    service_id = table.Column<int>(type: "integer", nullable: false),
                    invoiceId = table.Column<int>(type: "integer", nullable: true),
                    issueDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    total = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_billing", x => x.Id);
                    table.ForeignKey(
                        name: "FK_billing_invoice_invoiceId",
                        column: x => x.invoiceId,
                        principalTable: "invoice",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_billing_invoiceId",
                table: "billing",
                column: "invoiceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "billing");
        }
    }
}

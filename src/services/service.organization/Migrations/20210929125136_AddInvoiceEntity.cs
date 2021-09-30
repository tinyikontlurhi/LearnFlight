using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace service.organization.Migrations
{
    public partial class AddInvoiceEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "invoice",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    issueDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    dueDate = table.Column<DateTime>(type: "timestamp without time zone", nullable: false),
                    type = table.Column<string>(type: "text", nullable: true),
                    status = table.Column<string>(type: "text", nullable: true),
                    currency = table.Column<string>(type: "text", nullable: true),
                    amount = table.Column<double>(type: "double precision", nullable: false),
                    billingPeriod = table.Column<string>(type: "text", nullable: true),
                    organizationId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_invoice", x => x.Id);
                    table.ForeignKey(
                        name: "FK_invoice_organization_organizationId",
                        column: x => x.organizationId,
                        principalTable: "organization",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_invoice_organizationId",
                table: "invoice",
                column: "organizationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "invoice");
        }
    }
}

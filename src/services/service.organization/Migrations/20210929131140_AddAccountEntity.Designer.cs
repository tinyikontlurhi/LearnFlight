﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using service.organization.data;

namespace service.organization.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20210929131140_AddAccountEntity")]
    partial class AddAccountEntity
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("service.organization.models.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("cardName")
                        .HasColumnType("text");

                    b.Property<byte[]>("cardNumberHash")
                        .HasColumnType("bytea");

                    b.Property<byte[]>("cardNumberSalt")
                        .HasColumnType("bytea");

                    b.Property<string>("expires")
                        .HasColumnType("text");

                    b.Property<bool>("isActive")
                        .HasColumnType("boolean");

                    b.Property<int?>("organizationId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("organizationId");

                    b.ToTable("account");
                });

            modelBuilder.Entity("service.organization.models.Billing", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int?>("invoiceId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("issueDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("service_id")
                        .HasColumnType("integer");

                    b.Property<double>("total")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.HasIndex("invoiceId");

                    b.ToTable("billing");
                });

            modelBuilder.Entity("service.organization.models.District", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("area")
                        .HasColumnType("text");

                    b.Property<string>("code")
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<long>("population")
                        .HasColumnType("bigint");

                    b.Property<double>("populationDensity")
                        .HasColumnType("double precision");

                    b.Property<string>("seat")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("district");
                });

            modelBuilder.Entity("service.organization.models.Invoice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<double>("amount")
                        .HasColumnType("double precision");

                    b.Property<string>("billingPeriod")
                        .HasColumnType("text");

                    b.Property<string>("currency")
                        .HasColumnType("text");

                    b.Property<DateTime>("dueDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("issueDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int?>("organizationId")
                        .HasColumnType("integer");

                    b.Property<string>("status")
                        .HasColumnType("text");

                    b.Property<string>("type")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("organizationId");

                    b.ToTable("invoice");
                });

            modelBuilder.Entity("service.organization.models.Organization", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("address")
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .HasColumnType("text");

                    b.Property<DateTime>("lastLogin")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<byte[]>("passwordHash")
                        .HasColumnType("bytea");

                    b.Property<byte[]>("passwordSalt")
                        .HasColumnType("bytea");

                    b.Property<string>("phone")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("organization");
                });

            modelBuilder.Entity("service.organization.models.Province", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<long>("area")
                        .HasColumnType("bigint");

                    b.Property<string>("code")
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<long>("population")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.ToTable("province");
                });

            modelBuilder.Entity("service.organization.models.Account", b =>
                {
                    b.HasOne("service.organization.models.Organization", "organization")
                        .WithMany()
                        .HasForeignKey("organizationId");

                    b.Navigation("organization");
                });

            modelBuilder.Entity("service.organization.models.Billing", b =>
                {
                    b.HasOne("service.organization.models.Invoice", "invoice")
                        .WithMany()
                        .HasForeignKey("invoiceId");

                    b.Navigation("invoice");
                });

            modelBuilder.Entity("service.organization.models.Invoice", b =>
                {
                    b.HasOne("service.organization.models.Organization", "organization")
                        .WithMany()
                        .HasForeignKey("organizationId");

                    b.Navigation("organization");
                });
#pragma warning restore 612, 618
        }
    }
}

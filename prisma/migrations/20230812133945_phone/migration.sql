-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnPhones" (
    "id" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "CategoriesOnPhones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phones" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phone_images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "phone_id" TEXT NOT NULL,

    CONSTRAINT "phone_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BrandsOnPhones" (
    "id" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,

    CONSTRAINT "BrandsOnPhones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneBrands" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "PhoneBrands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneDetails" (
    "id" TEXT NOT NULL,
    "memory" INTEGER NOT NULL,
    "os" TEXT NOT NULL,
    "display" TEXT NOT NULL,
    "nfc" BOOLEAN NOT NULL,
    "charge" TEXT NOT NULL,
    "phoneId" TEXT NOT NULL,

    CONSTRAINT "PhoneDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhoneDetails_phoneId_key" ON "PhoneDetails"("phoneId");

-- AddForeignKey
ALTER TABLE "CategoriesOnPhones" ADD CONSTRAINT "CategoriesOnPhones_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnPhones" ADD CONSTRAINT "CategoriesOnPhones_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "phone_images" ADD CONSTRAINT "phone_images_phone_id_fkey" FOREIGN KEY ("phone_id") REFERENCES "Phones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandsOnPhones" ADD CONSTRAINT "BrandsOnPhones_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "PhoneBrands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BrandsOnPhones" ADD CONSTRAINT "BrandsOnPhones_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneDetails" ADD CONSTRAINT "PhoneDetails_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

# productloader
Product Loader
---

## Introduction

Welcome to the **Table By Yoco Product Loader**! This tool is designed to simplify and speed up the process of creating and managing your product list for Yoco. It allows you to add products with multiple variations, modifiers, and specific inventory details in a user-friendly interface and then export the data into an Excel file formatted for Yoco's system.

This guide will walk you through how to use the tool effectively.

<aside>
👉

> [**bit.ly/Tabletest**](https://bit.ly/Tabletest)
> 
</aside>

---

# 🚀How to Use the Product Loader

### **Step 1: Set Your Session Defaults**

Before you start adding products, you need to set up the defaults for your current session. This ensures consistency across all the products you add.

![image.png](attachment:b97abea8-e901-45d3-abb1-fc576aa893f8:image.png)

1. **Site**: Enter the name of your store or business location (e.g., "Main Street Cafe"). This is a required field.
2. **Define PLU/SKU?**: Choose how you want to assign Product PLU/SKUs.
    - **No (Auto-generate)**: The tool will automatically create a unique PLU for each product, starting from `PLU-1001`. This is the recommended option for simplicity.
    - **Yes (Manual Entry)**: You will be required to enter a unique PLU/SKU for each product. This is for users who have a pre-existing SKU system.
3. **Set Defaults**: Click this button to lock in these settings. You can click "Edit Defaults" later if you need to make changes.

### **Step 2: Fill in the Product Details**

Complete the main form with the details of your product. Required fields are marked with a blue asterisk (*).

![image.png](attachment:861a4ef6-d940-40e7-b0d9-22c7daa4b6ab:image.png)

- **Product Name***: The base name of the product (e.g., "Chicken Pizza").
- **Tax Applicable***: Select `TRUE` if tax should be added to the price, otherwise select `FALSE`.
- **Product Type***: Choose the type that best describes your product. This selection will change the available fields in the form.
    - `finishedGood`: A product sold directly to customers.
    - `rawMaterial`: An ingredient used to make other products.
    - `finishedGood & rawMaterial`: A product that is both sold and used as an ingredient.
    - `Manufactured`: A product made from other raw materials.
- **UOM*** (Unit of Measure): How the product is sold (e.g., `Each`, `Kilograms`).
- **Preparation Location***: Where the product is made (e.g., "Kitchen", "Bar").
- **Menu Category***: The category the product will appear under on your menu (e.g., "Burgers", "Drinks").
- **Default Selling Price**: The price if no variants are added.
- **Has Barcode?**: Select "Yes" to reveal a field for entering a barcode number.

### **Step 3: Add Variants and Modifiers (Optional)**

![image.png](attachment:4fa52cc6-e9c1-4ed0-bbd2-27d095f16422:image.png)

- **Variants**: Use this for different versions of a product, like size or color.
    1. Click **Add Variant**.
    2. Enter the **Variant Name** (e.g., "Small", "Medium", "Large").
    3. Enter the **Selling Price** for that specific variant.
    4. You can set a price for all variants at once using the "Set price for all variants" field and clicking "Apply to All".
- **Modifiers**: Use this for add-ons or extras.
    1. Click **Add Modifier**.
    2. Enter the **Modifier Name** (e.g., "Extra Cheese", "Avocado").
    3. Enter the additional **Price** for the modifier.
    4. If you have variants, you must link the modifier to a specific variant or to "All Variants".

### **Step 4: Add Inventory and Pricing Details**

Fill out the remaining fields based on FinishedGood & RawMaterial, RawMaterial or Manufactured product type.

- **Inventory Category/Sub-Category**: For stock management (e.g., "Food" -> "Meat").
- **Default Cost Price**: The cost to produce the item.
- **Default Selling Price**: The price for Product Type FinishedGood & RawMaterial.

### **Step 5: Add the Product to the Table**

Once all the details are filled in, click the **Add Product** button. The product will appear in the table at the bottom of the page. You can continue adding more products.

![image.png](attachment:08835e12-3988-4eb3-878c-6109d151a222:image.png)

### **Step 6: Export to Excel**

![image.png](attachment:870f9eae-ea0b-4b3a-a7c5-8f7dd84d1950:image.png)

When you have added all your products, click the **Export to Excel** button. This will download an `.xlsx` file with two sheets, formatted for Yoco.

1. **Site Product Structure**: The main product data.
2. **Create Product structure**: A secondary sheet for system integration.

After exporting, you will be asked if you want to clear all the data to start fresh.

---

## 📜 Explanation of Fields

| Field Name | Description |
| --- | --- |
| **Product Name** | The base name for your product (e.g., "Coffee"). |
| **Tax Applicable** | `TRUE` if the product is taxable, `FALSE` if not. |
| **Product Type** | Determines how the product is treated in inventory. See detailed descriptions above. |
| **Custom PLU/SKU** | A unique identifier for your product. Only appears if you select "Yes (Manual Entry)". |
| **Variants** | For different versions of the same product (e.g., sizes, colors). Each variant can have its own price. |
| **Modifiers** | Optional extras that customers can add to a product (e.g., "Extra Toppings"). |
| **UOM** | Unit of Measure. How you sell the item (e.g., `Each`, `Kilograms`, `Litres`). |
| **Preparation Location** | The area where the item is prepared (e.g., "Kitchen", "Bar"). |
| **Menu Category** | The category under which the product will appear on your point of sale (e.g., "Hot Drinks"). |
| **Inventory Category** | A broad category for stock management (e.g., "Beverages"). |
| **Inventory Sub-Category** | A more specific stock category (e.g., "Coffee & Tea"). |
| **Supplied Quantity** | For `rawMaterial` types, this is the quantity you receive from your supplier (e.g., you buy a 5kg bag of beans). |
| **Yield Quantity** | For `Manufactured` types, this is the quantity produced from the raw materials. |
| **Default Cost Price** | The cost of the product. For raw materials, this is the cost for the entire supplied quantity. |
| **Default Selling Price** | The price of the product if it has no variants. |
| **Has Barcode?** | Select "Yes" if your product has a scannable barcode to enter the number. |

---

## ✨ Key Features

- **Data Persistence**: Your product list is automatically saved in your browser. If you close the tab and reopen it, your products will still be there.
- **Auto-Suggestions**: The tool remembers your previously used Sites, Preparation Locations, and Categories to speed up data entry.
- **Error Highlighting**: The tool will show a pop-up with a list of required fields you may have missed, preventing incomplete entries.
- **Clear All**: The trash can icon in the header allows you to clear all entered products and reset the session defaults.
- **New Row Highlight**: When you add a new product, it will be highlighted in blue in the table for a few seconds for easy visibility.

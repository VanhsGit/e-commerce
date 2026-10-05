-- Executed by truncate-products.ps1 in a single transaction.
-- Only product records are removed. Unexpected references cause a rollback.
SET LOCAL lock_timeout = '10s';

SELECT current_database() AS database, current_user AS username;

SELECT 'ElectricBikeProducts' AS table_name, COUNT(*) AS before_count
FROM public."ElectricBikeProducts"
UNION ALL
SELECT 'AgriculturalMachineProducts', COUNT(*) FROM public."AgriculturalMachineProducts"
UNION ALL
SELECT 'ElectricalApplianceProducts', COUNT(*) FROM public."ElectricalApplianceProducts";

TRUNCATE TABLE
    public."ElectricBikeProducts",
    public."AgriculturalMachineProducts",
    public."ElectricalApplianceProducts"
RESTRICT;

SELECT 'ElectricBikeProducts' AS table_name, COUNT(*) AS after_count
FROM public."ElectricBikeProducts"
UNION ALL
SELECT 'AgriculturalMachineProducts', COUNT(*) FROM public."AgriculturalMachineProducts"
UNION ALL
SELECT 'ElectricalApplianceProducts', COUNT(*) FROM public."ElectricalApplianceProducts";

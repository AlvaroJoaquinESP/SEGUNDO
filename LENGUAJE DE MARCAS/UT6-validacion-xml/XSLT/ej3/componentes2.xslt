<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml"></xsl:output>

    <xsl:template match="/">
        <inventario>
            <xsl:for-each select="inventario/producto[peso > 2]">
                <producto>
                    <xsl:attribute name="codigo">
                        <xsl:value-of select="@codigo" />
                    </xsl:attribute>
                    <peso>
                        <xsl:attribute name="unidad">
                            <xsl:value-of select="peso/@unidad" />
                        </xsl:attribute>
                        <xsl:value-of select="peso" />
                    </peso>
                    <nombre>
                        <xsl:value-of select="nombre" />
                    </nombre>

                    <lugar>
                        <xsl:attribute name="edificio">
                            <xsl:value-of select="lugar/@edificio" />
                        </xsl:attribute>
                        <xsl:value-of select="lugar" />
                        <aula>
                            <xsl:value-of select="aula" />
                        </aula>
                    </lugar>
                </producto>
            </xsl:for-each>
        </inventario>
    </xsl:template>
</xsl:stylesheet>
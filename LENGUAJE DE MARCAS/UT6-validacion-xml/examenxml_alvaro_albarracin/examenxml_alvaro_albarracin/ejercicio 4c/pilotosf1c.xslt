<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text"></xsl:output>
    
    <xsl:template match="/">
    
        <xsl:text>Nombre, </xsl:text>
        <xsl:text>Apellido, </xsl:text>
        <xsl:text>Equipo, </xsl:text>
        <xsl:text>Titulo, </xsl:text>
        <xsl:text>Nacionalidad, </xsl:text>
        <xsl:text>&#10;</xsl:text>

        <xsl:for-each select="pilotosF1/piloto">
                <xsl:value-of select="nombre"></xsl:value-of>
                <xsl:text>,</xsl:text>
                <xsl:value-of select="apellido"></xsl:value-of>
                <xsl:text>,</xsl:text>
                <xsl:value-of select="equipo"></xsl:value-of>
                <xsl:text>,</xsl:text>
                <xsl:value-of select="titulos"></xsl:value-of>
                <xsl:text>,</xsl:text>
                <xsl:value-of select="@nacionalidad"></xsl:value-of>
                <xsl:text>&#10;</xsl:text>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
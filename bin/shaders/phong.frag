// classic Phong equation
#version 410

in vec4 vPosition;
in vec4 vNormal;

uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;

uniform float specularPower;

uniform vec3 Ia;
uniform vec3 Id;
uniform vec3 Is;

uniform vec3 lightDirection; 

uniform vec3 cameraPosition;

out vec4 FragColour;

void main() {
	
	vec3 Ambient = Ka * Ia; 
	vec3 N = normalize(vNormal).xyz;

	float dotLN = lightDirection.x * N.x + lightDirection.y * N.y + lightDirection.z * N.z;
	vec3 Diffuse = Kd * dotLN * Id;

	//vec3 lightReflect = vec3(lightDirection.x - vNormal.x, lightDirection.y - vNormal.y, lightDirection.z - vNormal.z)
	//vec3 viewDirection = normalize(cameraPosition - vPosition); 
	//float dotLrE = lightReflect.x * viewDirection.x + lightReflect.y * viewDirection.y + lightReflect.z * viewDirection.z;
	//vec3 Specular = Ks * pow(dotLrE, specularPower) * Is; 

	FragColour = vec4( Ambient + Diffuse,1);
	
}